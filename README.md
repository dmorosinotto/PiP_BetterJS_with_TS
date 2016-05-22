PiP - Better JS with TS
====

## Better & Easier Javascript with Typescript
__Talk 24-06-2016 [Programmers in Padua](http://programmersinpadua.github.io/index.html) by Daniele Morosinotto__

- Presentation (created using [reveal.js](http://lab.hakim.se/reveal-js)) give a quick [intro](index.html) to **Typescript**, more infos can be found on [official site](http://www.typescriptlang.org/docs/tutorial.html) 
- [Samples](samples) code use **Typescript** to show how [annotations](samples/basics/annotations.ts) can help discovering [bugs in js](samples/basics/bug.js) and [correct](samples/basics/correct.ts) them using TS, and show 
different way to compile and bundle the same app modules written in TS using: [namespace](samples/modules/namespace) , [amd + revealjs](samples/modules/amd) , [cjs + browserify](samples/modules/cjs) , [webpack](samples/modules/webpack) and [systemjs](samples/modules/systemjs).

---

### Pre-requisite:
Install **Typescript** `npm i -g typescript` + plugin for your favorite editor ([see official page](http://www.typescriptlang.org/index.html#download-links)).

### To try samples:
```
npm install
cd samples\proj_dir
npm run tsc -- samples\proj_dir
npm run serve -- samples\proj_dir
```
