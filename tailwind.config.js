module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'body': 'rgb(29 78 216)',
        'buy': '#00e600',
        'sell': '#ff3300',
        'ready': '#ffff00',
        'pcrb': '#00b300',
        'pcrs': '#b30047',
        'pcrr': '#b3b300',
        'oi': '#ff33cc',
        'volume': '#ff6600',
        'pcrbo': '#008000',
        'pcrso': '#99003d',
        'oic': '#ff00ee',
        'oiv': '#f79af1',
        'lprc': '#04fb93',
        'iv': '#00ffff',
        'vwap': '#006699',
        'large': '#660000',
        'min': '#404040',
        'subscribe': '#ececec',
        'features': '#011e3b',
        'cardfeatures': '#022344',
        'fimc': '#ff6600',
        'hfimc': '#0d4782'
      },
      screens: {
        'ssm': { 'min': '0px', 'max': '639px' },
        'sssm': { 'min': '376px', 'max': '639px' },
        'ssssm': { 'min': '0px', 'max': '375px' }
      }
    },
  },
  plugins: [],
}