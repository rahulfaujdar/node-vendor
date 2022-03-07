# node-vendor

### installation

`npm i node-vendor --save`

### Usage

      import {paginate} from "node-vendor";

      const list = [{}, {}, {}, ...];

      res.send(paginate(list, {limit: 10, page: 1}));