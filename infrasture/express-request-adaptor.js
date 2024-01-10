const httpRequestAdaptor = (controller) => {
    const _500 = (res) => err => res.status(500).send({ err: err.message });
    const ok = (res) => result => res.status(200).json(result);

    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            method: req.method,
            path: req.path,
            headers: {
                contentType: req.get('Content-Type'),
                referer: req.get('referer'),
                userAgent: req.get('User-Agent')
            }
        }

        controller(httpRequest).then(ok(res)).catch(_500(res));
    }
}

module.exports = httpRequestAdaptor;