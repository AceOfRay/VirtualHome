import { DocumentData, Timestamp } from "firebase/firestore";

export default class ModuleMetaData {
  moduleType: string;
  moduleId: string;
  attachedModuleId: string | null;
  attachedModuleType: string | null;
  dateCreated: Timestamp;
  dateDeleted: Timestamp | null;
  deleted: boolean;

  constructor(
    doc: DocumentData
  ) {
    this.moduleType = doc.moduleType;
    this.moduleId = doc.moduleId;
    this.attachedModuleId = doc.attachedModuleId;
    this.attachedModuleType = doc.attachedModuleType;
    this.dateCreated = doc.dateCreated;
    this.dateDeleted = doc.dateDeleted;
    this.deleted = doc.deleted;
  }
}