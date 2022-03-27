type KeyValue<K, V> = { key: K; value: V };

class CustomMap<K, V> {
  private data: Array<KeyValue<K, V>> = new Array<KeyValue<K, V>>();

  get(key: K): KeyValue<K, V> | null {
    const result = this.data.filter((item) => item.key === key);

    return result ? result[0] : null;
  }

  add(keyValue: KeyValue<K, V>): void {
    const find = this.get(keyValue.key);

    if (find) {
      find.value = keyValue.value;

      return;
    }

    this.data.push(keyValue);
  }

  clean(): void {
    this.data = new Array<KeyValue<K, V>>();
  }

  print() {
    console.log(this.data);
  }
}

export function challenge() {
  const customMap = new CustomMap<number, string>();

  customMap.add({ key: 1, value: 'Davi' });
  customMap.add({ key: 2, value: 'Joelma' });
  customMap.add({ key: 3, value: 'Sarah' });

  customMap.print();

  customMap.add({ key: 1, value: 'Sarah' });

  console.log(customMap.get(2));

  customMap.print();
  customMap.clean();
  customMap.print();
}
