---
sidebar_position: 4
---

# Show/Save Diagnosis Result

KubeSkoop connectivity diagnosis supports multiple output formats, and provide Web UI to view diagnosis result interactively.

By default, when diagnosis finished, it will print simple link info and diagnose result to standard output. You can specify `--http` or `--format` to view result via Web UI, or save it into a specified format.

## Web UI

Web UI are provided to view diagnosis result interactivity, by adding `--http` argument to enable it. When diagnosis finished, it will start an HTTP server on the specified address, by using `--http-address` argument. Default value of `--http-address` is `127.0.0.1:8080`.

```shell
$ skoop -s 172.18.0.4 -d 10.96.0.10 -p 53 --http # Execute the diagnostic command, specify the src,dst, and use --http to provide the diagnostic result through the local web service
I0118 11:43:23.383446    6280 web.go:97] HTTP server listening on http://127.0.0.1:8080 # After the diagnosis is completed, a link to the diagnosis result will be output
```

Open the diagnosis result `http://127.0.0.1:8080` through browser：

![diagnose_web](/img/doc/intro_diagnose_web.jpg)

## Output format

`d2`, `svg` and `json` are supported as output format, by using `--format` to specify which one you want to use. You can also use `--output` to specify output filename. When set output filename to `-`, it will print the result to standard output. File will be saved into `output.d2/svg/json` by default.


### d2

Use `d2` as the output format. For more information about `d2` syntax, please see [documentation](https://d2lang.com/tour/introl).

This format only contains link graph, and will not contain diagnose result.

### svg

Use `svg` as the output format. `svg` are generated via d2 file.

This format only contains link graph, and will not contain diagnose result.

### json

Use `json` as the output format. It contains details about nodes and edges in link graph, and also contains diagnose result on them.
