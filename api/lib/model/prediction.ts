import dynamoose from 'dynamoose';
import { EntityClass, entity } from './entity';

export class PredictionClass extends EntityClass {
  conditions?: string;
  verdict?: boolean;
  prediction?: string;
}

const predictionSchema = new dynamoose.Schema({
  pk: {
    type: String,
    hashKey: true,
  },
  sk: {
    type: String,
    rangeKey: true,
  },
  conditions: {
    type: String,
  },
  verdict: {
    type: Boolean,
  },
  prediction: {
    type: String,
    index: {
      name: 'predictionUserIndex',
      rangeKey: 'sk',
      global: true,
    },
  },
});

export const predictionModel = entity<PredictionClass>(predictionSchema);
