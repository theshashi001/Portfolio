const CodeDisplay = () => {
  return (
    <section className='code-section'>
      <pre>
        1&nbsp;&nbsp;const <b>Person</b> = () =&gt; &#123;
      </pre>
      <pre>
        2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [name, setName] = useState(&apos;&apos;);
      </pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [role, setRole] = useState(&apos;&apos;);
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [interests, setInterests] = useState(&apos;&apos;);
      </pre>
      <pre>
        6
      </pre>
      <pre>
        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; useEffect(() =&gt; &#123;
      </pre>
      <pre>
        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setName(&quot;<b>Shashi Tiwari</b>&quot;);
      </pre>
      <pre>
        7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setRole(&quot;<b>Full-Stcak Software Engineer</b>&quot;);
      </pre>
      <pre>
        8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; setInterest(&quot;<b>Web3, web, AI, Crypto, F1</b>&quot;);
      </pre>
      <pre>
        9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;, []);
      </pre>
      <pre>
        10 &#125;
      </pre>
    </section>
  )
}

export default CodeDisplay;