const emailWrapper = (content: string) => {
  return `
  <div
      style="
        outline: 2px solid rgba(128, 128, 128, 0.568);
        padding: 4px;
        border-radius: 10px;
        font-family: sans-serif;
        max-width: 700px;
        margin: 40px auto;
        padding: 10px;
      "
    >
      <img
        src="${process.env.WEB_URL}/img/logo/logo.png"
        alt="${process.env.APPLICATION_NAME}-logo"
        style="width: 100px; margin: 5px auto; display: block"
      />
      <h1 style="color: green; text-align: center; margin: 0px">${process.env.APPLICATION_NAME}</h1>
       <div class="content" style="margin: 5px">
       ${content}        
      </div>
    </div>
  `;
};

export default emailWrapper;
