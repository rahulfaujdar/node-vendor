# node-vendor

### installation

`npm i node-vendor --save`

### Usage

      import {paginate} from "node-vendor";

      const list = [{}, {}, {}, ...];

      paginate({data: list, limit: 10, page: 1});