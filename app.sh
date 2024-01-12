#!/bin/bash

echo "Welcome to Shell POS."

url="http://localhost:3000/products"

printHeaders() {
  printf "%-20s %-15s %-10s\n" "Name" "Price" "Quantity"
}

getProducts() {
  wget -qO- "$url"
}

getProductLength() {
  local products="$1"
  jq 'length' <<<"$products"
}

main() {
  products=$(getProducts)
  productLength=$(getProductLength "$products")

  printHeaders

  selected_product=$(
    for ((i = 0; i < productLength; i++)); do
      name=$(jq -r ".[$i].name" <<<"$products")
      price=$(jq -r ".[$i].price" <<<"$products")
      quantity=$(jq -r ".[$i].quantity" <<<"$products")
      printf "%-20s %-15s %-10s\n" "$name" "$price" "$quantity"
    done | fzf --prompt="Select a product: " 
  )
  qnty=$(seq 1 100 | fzf --prompt="Select a quantity: ")

}

main
