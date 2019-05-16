import React, { useState } from 'react'

const WithHooks = () => {
    const [count, setCount] = useState(0);

    return (
    <div>
      Count: {count} <br />
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
    )

}

export default WithHooks;