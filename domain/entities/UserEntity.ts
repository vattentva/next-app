export class UserEntity {
  private id: string;
  private name: string;
  private email: string;
  
  constructor(id: string, name: string, email: string) {
    // super(id);
    this.id = id;
    this.name = name;
    this.email = email;
  }
  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
}