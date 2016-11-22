/**
 * Created by lukasz on 22.11.2016.
 */

export interface DeserializableInterface<T> {
  deserialize(input:Object):T;
}
