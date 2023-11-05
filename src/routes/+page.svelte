<div class="container">
  <div class="content">
    <div class="section">
      <p data-animate style:--stagger="1">Julien Ducrot — JavaScript Developer. React & React Native enthusiast.</p>
    </div>
    <div class="section">
      <p class="text-dark" data-animate style:--stagger="2">About</p>
      <p data-animate style:--stagger="3">I am a developer with more than 15 years of experiences focused on improving performance, readability, and information architecture.</p>
      <p data-animate style:--stagger="4"> I love abstracting existing front-end code into reusable components and creating self-documenting code-systems.</p>
    </div>
    <div class="section">
      <p class="text-dark" data-animate style:--stagger="5">Contact</p>
      <p data-animate style:--stagger="6">Reach out to me on <a href="https://www.x.com/joulsounet">X</a>, <a href="https://www.linkedin.com/in/julienducrot/">LinkedIn</a> or <a href="mailto:contact@julienducrot.com">contact@julienducrot.com</a>.</p>
    </div>
  </div>
</div>

<style>
  .container {
    background-color: #0A0A0A;
    display: flex;
    flex-direction: row;
    height: 100vh;
    padding: 64px;
    width: 100vw;
  }

  .content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 512px;
  }

  .section {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  p {
    color: #EDEDED;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    width: 100%;
  }

  .text-dark {
    color: #666666;
    user-select: none;
  }

  a {
    color: #EDEDED;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: #A0A0A0;
  }

  a:hover {
    color: #A0A0A0;
  }

  @media only screen and (max-width: 512px) {
    .container {
      padding: 64px 48px;
    }
  }
</style>