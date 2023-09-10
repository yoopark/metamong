import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  // Reference: https://github.com/orioncactus/pretendard#font-family
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
  fontSize: 16,
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('body *', {
  // FIXME: not working
  boxSizing: 'border-box',
});
