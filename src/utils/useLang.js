import { useSelector } from 'react-redux'
import { selectLanguage } from '../redux/slices/langSlice'
import translationsJson from './translations.json'


export const useLang = () => {
	const lang = useSelector(selectLanguage).language
	const translations = translationsJson

	return { lang, translations }
}

