export function add(x: number, y: number) {
  return x + y;
}

describe('Teste Inicial', () => {
  test('Função de Adicionar', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
