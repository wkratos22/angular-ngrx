import { createAction, props } from "@ngrx/store";
import { Persona } from "../../../../models/persona.model";


export const load = createAction('[App/Lista] load');

export const loadComplete = createAction(
    '[App/Lista] load complete',
  props<{ itemPersona: Persona[] }>()

);

export const editPersona = createAction(
    '[App/Lista] Edit start',
  props<{ itemPersona: Persona }>()

);
  
export const deletePersona = createAction(
    '[App/Lista] delete start',
    props<{ id: string }>()
    
);


