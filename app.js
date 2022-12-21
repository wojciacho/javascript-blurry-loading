const container = document.querySelector(".container"),
  loading = document.querySelector(".loading");

let init = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const blur = () => {
  init++;
  if (init > 99) {
    clearInterval(interval);
  }

  loading.innerText = `${init}%`;
  loading.style.opacity = scale(init, 0, 100, 1, 0);
  container.style.filter = `blur(${scale(init, 0, 100, 30, 0)}px)`;
};

let interval = setInterval(blur, 30);
