import panzoom from 'panzoom';
import Flicking from "@egjs/flicking";
import "@egjs/flicking/dist/flicking.css";
import "@egjs/flicking/dist/flicking-inline.css";

const area = document.querySelector('#zoom-scene')
panzoom(area)

const flicking = new Flicking(".flicking-viewport", {
  circular: true
});