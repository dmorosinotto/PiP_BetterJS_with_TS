PiP - Better JS with TS
====

## Better & Easier Javascript with Typescript
__Talk 24-05-2016 [Programmers in Padua](http://programmersinpadua.github.io/index.html) by Daniele Morosinotto__

- Presentation (created using [reveal.js](http://lab.hakim.se/reveal-js)) give a quick [intro](index.html) to **Typescript**, more infos can be found on [official site](http://www.typescriptlang.org/docs/tutorial.html) 
- [Samples](samples) code use **Typescript** to show how [annotations](samples/basics/annotations.ts) can help discovering [bugs in js](samples/basics/bug.js) and [correct](samples/basics/correct.ts) them using TS, and show 
different way to compile and bundle the same app modules written in TS using: [namespace](samples/modules/namespace) , [amd + requirejs](samples/modules/amd) , [cjs + browserify](samples/modules/cjs) , [webpack](samples/modules/webpack) and [systemjs](samples/modules/systemjs).

---

### Pre-requisite:
Install [Node.js](https://nodejs.org) and **Typescript** `npm i -g typescript` + plugin for your favorite editor ([see official page](http://www.typescriptlang.org/index.html#download-links)) +
global install peer-dependencies:
```
npm i -g typings        // tool to get .d.ts for external library like jquery
npm i -g http-server    // developer tool to host local server on current dir
```
### To try samples:
```
cd samples/proj_dir
npm install
npm start
```
open your favorite browser [http://localhost:8080](http://localhost:8080)