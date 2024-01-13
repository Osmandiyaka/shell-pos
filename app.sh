#!/bin/bash

echo "Welcome to Shell POS."

API_URL="http://localhost:3000/products"

print_headers() {
  printf "%-20s %-15s %-10s\n" "Name" "Price" "Quantity"
}

get_products() {
  wget -qO- "$API_URL"
}

get_product_length() {
  local products="$1"
  jq 'length' <<<"$products"
}

print_line() {
  printf "%-20s %-15s %-10s\n" "--------------------" "---------------" "---------------"
}

format_product_list() {
  local products="$1"
  product_length=$(get_product_length "$products")

  formatted_products=$(for ((i = 0; i < $product_length; i++)); do
    name=$(jq -r ".[$i].name" <<<"$products")
    price=$(jq -r ".[$i].price" <<<"$products")
    printf "%-20s %-15s \n" "$name" "$price"
  done)
  echo -e "DONE\n $formatted_products"
}

main() {
  products=$(get_products)
  print_headers
  formatted_products=$(format_product_list "$products")
  selected_products=$(while [ 1 ]; do
    selected_product=$(fzf --prompt="Select a product:" <<<"$formatted_products")
    if [ "$selected_product" = "DONE" ]; then
      break
    fi
    quantity=$(seq 1 100 | fzf --prompt="Select a quantity: ")
    echo "$selected_product  $quantity"
  done)
   echo "$selected_products"
}

main
