'use strict';

export default interface connection {
  name: string,
  user: string,
  host: string,
  port: number,
  keyfile: string
};