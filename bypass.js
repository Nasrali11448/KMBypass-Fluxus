const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function bypass() {
  const urlParams = new URLSearchParams(window.location.search);
  const link = urlParams.get('link');

  if (!link) {
    return console.log({
      success: false,
      result: "No link provided",
      time: "0ms"
    });
  }

  if (!link.startsWith("https://flux.li/")) {
    return console.log({
      success: false,
      result: "This API only supports Fluxus. To get more bypasses, contact the_king.78 on Discord",
      time: "0ms"
    });
  }

  const startTime = Date.now();

  try {
    const API = `https://ethos.kys.gay/api/free/bypass?url=${encodeURIComponent(link)}`;
    const response = await fetch(API);
    const data = await response.json();

    await delay(10000);

    const endTime = Date.now();
    const time = `${endTime - startTime}ms`;

    if (data.success) {
      console.log({
        success: true,
        result: data.result,
        time: time
      });
    } else {
      console.log({
        success: false,
        result: "Failed to get key",
        time: time
      });
    }
  } catch (error) {
    const endTime = Date.now();
    const time = `${endTime - startTime}ms`;

    console.log({
      success: false,
      result: "Failed to get key",
      time: time
    });
  }
}

bypass();
