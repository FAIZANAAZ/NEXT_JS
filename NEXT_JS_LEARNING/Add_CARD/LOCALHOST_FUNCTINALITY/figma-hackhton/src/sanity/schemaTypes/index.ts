import { type SchemaTypeDefinition } from 'sanity'
import { userSchema } from './userclerk'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userSchema],
}
