import { Value, Layer } from '../../summary-result/summary-result.class';


export interface ResultManagerPayload {
  indicators: IndicatorResult[],
  raster_layers: LayerResult[],
  vector_layers: LayerResult[],
  graphics: Graphics[]
}
export interface IndicatorResult {
  layers: Layer[],
  no_data_layers?: Value [],
  no_table_layers?: Value []
}
export interface LayerResult {
  name: string,
  path: string
}
export interface Graphics {
  type: string,
  name: string,
  data: GraphicData,
  options: any,
  category: string,
  labels: string[],
  isLoading: boolean
}
export interface GraphicData {
  labels: string[],
  datasets: GraphicDataset[]
}
export interface GraphicDataset {
  label: string,
  backgroundColor: string[],
  data: number[]
}
