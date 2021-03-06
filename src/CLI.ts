#!/usr/bin/env -S deno --unstable run --allow-all

import * as API from "./API.ts"

var path = Deno.args[0];

if (path) {
  var file = Deno.readTextFileSync("./" + path);
  var targ = Deno.args[1] || "ts";
  API.run(file, {target: targ});
} else {
  console.log("Usage: kindash file.kindash");
}
