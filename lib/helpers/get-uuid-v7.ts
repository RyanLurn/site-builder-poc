import { v7 as uuidv7 } from "uuid";

function getUuidV7() {
  const newUuid = uuidv7();

  return newUuid;
}

export default getUuidV7;
