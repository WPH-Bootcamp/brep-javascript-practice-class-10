import ActionButton from './1-ActionButton';
import { useCallback, useState } from 'react';

function WithoutUseCallback() {
  const [count, setCount] = useState(0);
  const handleSayHello = () => {
    console.log('Hello student');
  };

  console.log('Parent Rendered');

  return (
    <section>
      <p>Parent Count : {count}</p>

      <button onClick={() => setCount((data) => data + 1)}>
        Re-render Parent {count}x
      </button>

      <ActionButton onSayHello={handleSayHello} />
    </section>
  );
}

function WithUseCallback() {
  const [count, setCount] = useState(0);
  const handleSayHello = useCallback(() => {
    console.log('Hello student');
  }, []);

  console.log('Parent Rendered');

  return (
    <section>
      <p>Parent Count : {count}</p>

      <button onClick={() => setCount((data) => data + 1)}>
        Re-render Parent {count}x
      </button>

      <ActionButton onSayHello={handleSayHello} />
    </section>
  );
}

export { WithoutUseCallback, WithUseCallback };
