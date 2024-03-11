import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { themeLight, themeDark } from '../redux/slices/themeSlice'
import { selectTheme } from '../redux/slices/themeSlice'

const Footer = () => {
	let toggleRef = React.useRef();
	const { theme } = useSelector(selectTheme)
	const dispatch = useDispatch()
	const fillTheme = theme === 'light' ? '#232323' : '#dadee1'

	const themesHandler = () => {
		const newTheme = theme === 'light' ? dispatch(themeDark()) : dispatch(themeLight());
		localStorage.setItem('theme', JSON.stringify(newTheme));
		return newTheme
	}

	return (
		<footer>
			<div className="container">
				<div className="footer__container">
					<div className="footer__icons">

						<a href="https://t.me/istredo" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" space="preserve" width="40" stroke="#000" viewBox="0 0 512 512" fill={fillTheme}>
								<path d="m385.268 121.919-210.569 129.69c-11.916 7.356-17.555 21.885-13.716 35.323l22.768 80c1.945 6.821 8.015 11.355 14.999 11.355.389 0 .782-.014 1.176-.043 7.466-.542 13.374-6.103 14.367-13.515l5.92-43.866c.798-5.902 3.642-11.392 8.001-15.45l173.765-161.524c5.251-4.869 5.945-12.842 1.618-18.545-4.334-5.708-12.209-7.184-18.329-3.425zM214.32 290.478c-7.808 7.268-12.895 17.089-14.323 27.655l-2.871 21.278-16.527-58.072c-1.343-4.704.635-9.791 4.805-12.365l154.258-95.007L214.32 290.478z" />
								<path d="M503.67 37.382c-6.579-5.576-15.657-7.111-23.698-4.005L15.08 212.719C5.873 216.27-.047 224.939 0 234.804c.048 9.874 6.055 18.495 15.316 21.965l108.59 40.529 42.359 136.225c2.326 7.489 8.197 13.308 15.703 15.566 7.502 2.256 15.604.643 21.66-4.31l63.14-51.473c3.032-2.472 7.362-2.594 10.528-.295l113.883 82.681c4.097 2.978 8.932 4.511 13.823 4.511 2.865 0 5.749-.526 8.517-1.596 7.486-2.895 12.93-9.312 14.56-17.163l83.429-401.309c1.752-8.45-1.251-17.168-7.838-22.753zM491.536 55.99l-83.428 401.308c-.302 1.45-1.346 2.053-1.942 2.284-.6.232-1.785.489-2.997-.393l-113.887-82.685c-5.091-3.696-11.077-5.531-17.052-5.531-6.518 0-13.027 2.185-18.347 6.519l-63.154 51.485c-1.124.92-2.291.756-2.885.577-.598-.18-1.665-.69-2.099-2.086L141.9 286.462a10.203 10.203 0 0 0-6.173-6.527L22.462 237.662c-1.696-.635-2.057-1.958-2.062-2.957-.005-.99.343-2.307 2.023-2.955L487.316 52.409c.002-.001.005-.002.008-.003 1.51-.583 2.627.087 3.159.537.534.455 1.384 1.455 1.053 3.047z" />
								<path d="M427.481 252.142c-5.506-1.196-10.936 2.299-12.131 7.804l-1.55 7.14c-1.195 5.505 2.299 10.936 7.804 12.131.729.158 1.456.234 2.174.234 4.695 0 8.92-3.262 9.958-8.037l1.55-7.14c1.194-5.505-2.301-10.936-7.805-12.132zM417.281 299.122c-5.512-1.195-10.938 2.299-12.132 7.804L381.69 414.977c-1.195 5.505 2.299 10.936 7.803 12.131.73.158 1.457.234 2.174.234 4.696 0 8.92-3.262 9.958-8.037l23.459-108.052c1.195-5.505-2.299-10.936-7.803-12.131z" /></svg>
						</a>

						<a href="https://github.com/istredo" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40" viewBox="0 0 24 24"><path fill={fillTheme} fill-rule="evenodd" d="M12 1.545c-6.055 0-10.957 4.877-10.957 10.883 0 4.41 2.643 8.205 6.447 9.912.398.179.787.108 1.091-.12a1.38 1.38 0 0 0 .532-1.107v-.57l-1.357-.184a.489.489 0 0 1-.03-.005c-.748-.146-1.253-.409-1.623-.788-.311-.319-.501-.701-.662-1.025l-.056-.113a11.645 11.645 0 0 0-.487-.91c-.135-.214-.24-.324-.344-.393-.264-.175-.518-.472-.518-.843a.72.72 0 0 1 .26-.56.844.844 0 0 1 .546-.182c.222 0 .431.068.605.146.178.08.355.186.52.296.402.268.798.585 1.133.976.349.406.596.664.968.717.306.044.618.045.861.034a2.558 2.558 0 0 1 .166-.56 8.347 8.347 0 0 1-.877-.256c-.654-.232-1.383-.593-1.873-1.14-.538-.602-.871-1.139-1.057-1.767-.181-.612-.211-1.275-.211-2.091 0-1.25.541-2.303.947-2.862a8.655 8.655 0 0 1-.335-1.501 3.515 3.515 0 0 1 .001-.968c.05-.293.175-.653.504-.87.317-.211.689-.202.979-.148.301.057.614.182.902.325.469.232.935.542 1.284.805.602-.177 1.667-.405 2.63-.426h.022c.964.021 1.981.249 2.568.425.35-.262.815-.573 1.283-.804.288-.143.6-.268.902-.325.29-.054.662-.063.98.147.328.218.454.578.503.871.051.305.039.646 0 .968a8.661 8.661 0 0 1-.334 1.501c.406.56.947 1.613.947 2.862 0 .816-.03 1.479-.21 2.09-.187.63-.52 1.166-1.058 1.768-.49.547-1.219.908-1.873 1.14a8.45 8.45 0 0 1-1.062.297c.123.372.167.673.167.846v3.09c0 .47.219.871.53 1.105.302.229.69.3 1.088.126 3.84-1.692 6.514-5.497 6.514-9.93 0-6.005-4.9-10.882-10.956-10.882ZM9.476 18.71c-.26.037-.001 0-.001 0h-.003l-.008.002-.029.004a6.523 6.523 0 0 1-.447.037c-.282.013-.669.014-1.066-.043-.791-.112-1.272-.672-1.583-1.036l-.03-.034a3.6 3.6 0 0 0-.327-.333c.103.19.21.402.325.63l.01.02.051.104c.175.348.29.58.481.774.186.19.476.374 1.062.49l1.794.243a.522.522 0 0 1 .452.518v1.027c0 .8-.375 1.513-.95 1.945a2.087 2.087 0 0 1-2.143.236C2.902 21.427 0 17.27 0 12.428 0 5.836 5.377.5 12 .5s12 5.336 12 11.928c0 4.867-2.939 9.035-7.137 10.886a2.09 2.09 0 0 1-2.137-.247 2.426 2.426 0 0 1-.946-1.942v-3.09c0-.07-.049-.474-.322-1.017a.524.524 0 0 1 .408-.755c.343-.038.921-.149 1.504-.356.594-.21 1.127-.498 1.444-.852.471-.526.706-.93.835-1.367.134-.453.168-.98.168-1.793 0-1.141-.6-2.1-.876-2.409a.523.523 0 0 1-.104-.523c.14-.394.31-1.007.375-1.554.032-.275.034-.505.006-.671a.457.457 0 0 0-.054-.173.486.486 0 0 0-.207.009c-.17.032-.387.112-.633.234-.49.242-1 .6-1.316.856a.52.52 0 0 1-.505.085A9.306 9.306 0 0 0 12 7.296c-1.007.024-2.169.31-2.566.453a.52.52 0 0 1-.505-.085 7.775 7.775 0 0 0-1.316-.856 2.607 2.607 0 0 0-.634-.234.486.486 0 0 0-.206-.009.456.456 0 0 0-.054.173c-.028.166-.026.396.006.671.065.547.236 1.16.375 1.554.063.18.024.38-.104.523-.276.309-.876 1.268-.876 2.409 0 .812.034 1.34.168 1.793.13.437.364.84.834 1.367.318.354.85.642 1.445.852a7.194 7.194 0 0 0 1.503.356.522.522 0 0 1 .246.945c-.165.118-.274.33-.335.575a1.944 1.944 0 0 0-.056.385v.019a.523.523 0 0 1-.449.523Z" clip-rule="evenodd" /></svg>
						</a>

						<a href="https://wa.me/79996796799" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 256 256" fill={fillTheme}><path d="M128.0005 28a100.026 100.026 0 0 0-86.8857 149.539l-9.0045 31.5167a11.9997 11.9997 0 0 0 14.835 14.834l31.5166-9.004A100.0068 100.0068 0 1 0 128.0006 28Zm0 192a91.8708 91.8708 0 0 1-46.9526-12.8672 3.995 3.995 0 0 0-3.1436-.4082l-33.1572 9.4736a3.9998 3.9998 0 0 1-4.9444-4.9453l9.4727-33.1562a4.0011 4.0011 0 0 0-.4082-3.1436A92.0108 92.0108 0 1 1 128.0005 220Zm50.5112-73.457-20.4594-11.6914a12.0105 12.0105 0 0 0-12.1275.1289l-13.8066 8.2842a44.0418 44.0418 0 0 1-19.3824-19.3828l8.2837-13.8067a12.0108 12.0108 0 0 0 .129-12.127l-11.691-20.46A10.9158 10.9158 0 0 0 100 72a32.0081 32.0081 0 0 0-32 31.8809A84.001 84.001 0 0 0 151.999 188h.1201A32.0084 32.0084 0 0 0 184 156a10.913 10.913 0 0 0-5.4883-9.457ZM152.108 180h-.1084A75.9997 75.9997 0 0 1 76 103.8926 23.997 23.997 0 0 1 100 80a2.8998 2.8998 0 0 1 2.5117 1.457l11.691 20.461a4.0042 4.0042 0 0 1-.043 4.042l-9.3892 15.6484a3.9987 3.9987 0 0 0-.2183 3.6983 52.0411 52.0411 0 0 0 26.1416 26.1416 3.997 3.997 0 0 0 3.6987-.2188l15.6475-9.3887a4.006 4.006 0 0 1 4.043-.0439l20.4605 11.6924A2.8971 2.8971 0 0 1 176 156a23.9973 23.9973 0 0 1-23.892 24Z" /></svg>
						</a>

					</div>
					<div className="switch">
						<input ref={toggleRef} onClick={themesHandler} type="checkbox" id="toggle__button" className="toggle__button" checked={theme === 'light' ? '' : 'checked'} onChange={() => { }} />
						<label htmlFor="toggle__button" className="text">Switch theme</label>
					</div>

				</div>

			</div>
		</footer>
	)
}

export default Footer

