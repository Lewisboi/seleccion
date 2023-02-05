import { Group } from "./group.ts";
import { Person } from "./person.ts";
import { Queryable } from "./types.ts";

function parseJSON(jasonObject: Iterable<any>): Group {
  const gr = new Group();
  for (const personObj of jasonObject) {
    let elem: Queryable; 
    if (Array.isArray(personObj)) {
      elem = parseJSON(personObj);
    } else {
      elem = new Person(personObj.name, personObj.age, personObj.sex);
    }
    gr.addMember(elem);
  }
  return gr;
}

export async function loadFrom(filename: string): Promise<Group> {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(filename);
  const json = JSON.parse(decoder.decode(data));
  return parseJSON(json);
}
