# Créer un store

## Introduction

Zustand est une alternative à Redux pour créer et gérer des states.
L'avantage est que la syntaxe est beaucoup plus légère

## Initialiser un store

On peut initialiser un store comme ceci :

```ts
export const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

On peut typer le store comme ceci :

```ts
export type TUseCounter = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounter = create<TUseCounter>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

## Utilisation

### Set State

On importe les setters comme ceci:

```ts
const { increment, decrement } = useCounter();
```

On peut l'utiliser comme ceci :

```
<button OnClick={increment}>Click me</button>
```

### Get State

On import le state comme ceci:

```ts
const { count } = useCounter();
```

On l'utilise comme ceci:

```html
<p>{count}</p>
```

### Get state à l'interieur du store

On peut avoir si besoin la valeur du state à un instant T du store avec la méthode get

Par exemple:

```ts
export const useCounter = create<TUseCounter>((set, get) => ({
  count: 0,
  increment: () => set(() => ({ count: get().count + 1 })),
  decrement: () => set(() => ({ count: get().count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

## Asynchronisme

Zustand gère directement l'asynchronisme à l'intérieur

Exemple:

```ts
export const usePokemon = create<TUsePokemon>((set, get) => ({
  pokemon: undefined,
  index: 1,
  setPokemon: async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${get().index}`
    );
    const data = await response.json();
    set({ pokemon: data });
  },
  increaseIndex: () => set((state) => ({ index: state.index + 1 })),
  decreaseIndex: () => set((state) => ({ index: state.index - 1 })),
}));
```

Ici, setPokemon est une fonction asynchrone, directement dans l'objet Zustand.