---
sidebar_position: 5
---

# Web UI

Use Web UI to view diagnose result interactively.

Web UI are provided to view diagnose result interactivity, by adding `--http` argument to enable it. When diagnose finished, it will start an HTTP server on the specifed address, by using `--http-address` argument. Default value of `--http-address` is `127.0.0.1:8080`.

```shell
$ kubeskoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # Execute the diagnostic command, specify the src,dst, and use --http to provide the diagnostic result through the local web service
I0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # After the diagnosis is completed, a link to the diagnosis result will be output
```

Open `http://127.0.0.1:8080` in browser, you can see the diagnose result:

![diagnose_web](/img/doc/intro_diagnose_web.jpg)