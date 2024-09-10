export default abstract class Module {
  moduleType: string;
  moduleId: string;
  parentModuleType: string | null;
  parentModuleId: string | null;
  dateCreated: Date;
  dateDeleted: Date | null;
  deleted: boolean;

  constructor(
    moduleType: string,
    moduleId: string,
    parentModuleType: string | null,
    parentModuleId: string | null,
    dateCreated: Date,
    dateDeleted: Date | null,
    deleted: boolean
  ) {
    this.moduleType = moduleType;
    this.moduleId = moduleId;
    this.parentModuleType = parentModuleType;
    this.parentModuleId = parentModuleId;
    this.dateCreated = dateCreated;
    this.dateDeleted = dateDeleted;
    this.deleted = deleted;
  }

  serializeFormat(): {
    moduleType: string;
    moduleId: string;
    parentModuleType: string | null;
    parentModuleId: string | null;
    dateCreated: Date;
    dateDeleted: Date | null;
    deleted: boolean;
  } {
      return {
        moduleType: "string",
        moduleId: "string",
        parentModuleType: null,
        parentModuleId: null,
        dateCreated: this.dateCreated,
        dateDeleted: null,
        deleted: false,
      }
  }

  abstract getComponentData() : [];
}
