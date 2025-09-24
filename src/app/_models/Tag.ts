export class Tag {
    static readonly PYTHON = new Tag('Python', 'teal');
    static readonly ANGULAR = new Tag('Angular', 'blue');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'lightblue');
    static readonly Node = new Tag('Node', 'green');
    static readonly Express = new Tag('Express', 'blue');
    static readonly MongoDB = new Tag('MongoDB', 'purple');
    static readonly LLM = new Tag('LLM', 'lightgreen');
    static readonly REACT = new Tag('React', 'purple');
    private constructor(private readonly key:string, public readonly color:string) {}

    toString(): string {
        return this.key;
    }
}
