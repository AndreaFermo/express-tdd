const { test, expect } = require("@jest/globals");
const createSlug = require("./createSlug");

const posts = [
    {
        title: "prova",
        slug: "prova"
    },
    {
        title: "prova",
        slug: "prova-2"
    }
]

test("createSlug dovrebbe ritornare una stringa", () => {
    const myString = createSlug("post", posts);
    const result = myString;
    expect(typeof result).toBe("string");
});

test("createSlug dovrebbe ritornare una stringa in lowercase", () => {
    const myString = "ANDREA";
    const result = createSlug(myString, posts);
    expect(result).toBe("andrea");
});

test("createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const myString = " CIAO SONO ANDREA ";
    const result = createSlug(myString, posts);
    expect(result).toBe("ciao-sono-andrea");
});

test("createSlug dovrebbe incrementare di 1 lo slug quando esiste già", () => {
    const myString = "prova";
    const result = createSlug(myString, posts);
    expect(result).toBe("prova-3");
});

test("createSlug dovrebbe lanciare un errore in caso di formato errato", () => {
    const myString = "prova";
    const result = () => createSlug(1234, posts);
    expect(result).toThrowError("kebab-case: il titolo non è presente o non è una stringa");
});

test("createSlug dovrebbe lanciare un errore in caso di titolo non presente", () => {
    const myString = "prova";
    const result = () => createSlug();
    expect(result).toThrowError("kebab-case: il titolo non è presente o non è una stringa");
});

test("createSlug dovrebbe lanciare un errore se manca l’array dei post", () => {
    const myString = "prova";
    const result = () => createSlug(myString);
    expect(result).toThrowError("kebab-case: devi passare un array come secondo argomento");
});