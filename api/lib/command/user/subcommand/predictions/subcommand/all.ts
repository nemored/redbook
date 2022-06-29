import { db } from '../../../../../model';
import { optionValue } from '../../../../../utility';
import { schema } from './common';

export const all = {
  schema,
  handler: async (body: any) => {
    const { options } = body.data.options[0].options[0];
    const userId = optionValue(options, 'user');

    const predictions = await db
      .selectFrom('prediction')
      .where('user_id', '=', userId)
      .selectAll()
      .execute();

    return {
      type: 4,
      data: {
        embeds: [
          {
            title: 'All Predictions',
            description: `The list of <@${userId}>'s predictions.`,
            color: 0x808080,
            fields: predictions.map((e) => ({
              name: e.id,
              value: e.conditions,
              inline: false,
            })),
          },
        ],
      },
    };
  },
};
