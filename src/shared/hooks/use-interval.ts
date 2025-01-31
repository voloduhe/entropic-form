import { onMounted, onUnmounted } from "vue";

function useInterval(callback: TimerHandler, time = 1000) {
  let timer: number | null = null;

  function start() {
    stop();
    timer = setInterval(callback, time);
  }
  function stop() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  onMounted(start);
  onUnmounted(stop);

  return { start, stop };
}

export { useInterval };
