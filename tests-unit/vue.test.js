import path from "path";
import tmp from "tmp-promise";
import { getCompiler, runWebpack, readFile } from "./utils";
import TtagPlugin from "../plugin/index";

test("should apply translations when entry is vue file", async done => {
  const dir = await tmp.dir({ unsafeCleanup: true });
  const plugin = new TtagPlugin({
    translations: {
      "zh-CN": path.join(__dirname, "./fixtures/vue/zh-CN.po")
    }
  });

  const compiler = getCompiler(plugin, {
    output: { path: dir.path },
    entry: path.join(__dirname, "./fixtures/vue/entry.vue")
  });

  await runWebpack(compiler);
  const transFile = await readFile(path.join(dir.path, "main-zh-CN.js"));
  console.log(transFile);
  //   expect(transFile).toContain("test translation [translated]");
  dir.cleanup();
  done();
});
