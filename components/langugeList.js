import { FlatList, TouchableOpacity,Text,View } from "react-native"

const LanguageList = ({visible,changeLang,sign})=>{
const List = 
[ { key: 'af', Name: 'Afrikaans' },
  { key: 'am', Name: 'Amharic' },
  { key: 'ar', Name: 'Arabic' },
  { key: 'as', Name: 'Assamese' },
  { key: 'az', Name: 'Azerbaijani' },
  { key: 'ba', Name: 'Bashkir' },
  { key: 'bg', Name: 'Bulgarian' },
  { key: 'bn', Name: 'Bangla' },
  { key: 'bo', Name: 'Tibetan' },
  { key: 'bs', Name: 'Bosnian' },
  { key: 'ca', Name: 'Catalan' },
  { key: 'cs', Name: 'Czech' },
  { key: 'cy', Name: 'Welsh' },
  { key: 'da', Name: 'Danish' },
  { key: 'de', Name: 'German' },
  { key: 'dv', Name: 'Divehi' },
  { key: 'el', Name: 'Greek' },
  { key: 'en', Name: 'English' },
  { key: 'es', Name: 'Spanish' },
  { key: 'et', Name: 'Estonian' },
  { key: 'eu', Name: 'Basque' },
  { key: 'fa', Name: 'Persian' },
  { key: 'fi', Name: 'Finnish' },
  { key: 'fil', Name: 'Filipino' },
  { key: 'fj', Name: 'Fijian' },
  { key: 'fo', Name: 'Faroese' },
  { key: 'fr', Name: 'French' },
  { key: 'fr-CA', Name: 'French (Canada)' },
  { key: 'ga', Name: 'Irish' },
  { key: 'gl', Name: 'Galician' },
  { key: 'gu', Name: 'Gujarati' },
  { key: 'he', Name: 'Hebrew' },
  { key: 'hi', Name: 'Hindi' },
  { key: 'hr', Name: 'Croatian' },
  { key: 'hsb', Name: 'Upper Sorbian' },
  { key: 'ht', Name: 'Haitian Creole' },
  { key: 'hu', Name: 'Hungarian' },
  { key: 'hy', Name: 'Armenian' },
  { key: 'id', Name: 'Indonesian' },
  { key: 'ikt', Name: 'Inuinnaqtun' },
  { key: 'is', Name: 'Icelandic' },
  { key: 'it', Name: 'Italian' },
  { key: 'iu', Name: 'Inuktitut' },
  { key: 'iu-Latn', Name: 'Inuktitut (Latin)' },
  { key: 'ja', Name: 'Japanese' },
  { key: 'ka', Name: 'Georgian' },
  { key: 'kk', Name: 'Kazakh' },
  { key: 'km', Name: 'Khmer' },
  { key: 'kmr', Name: 'Kurdish (Northern)' },
  { key: 'kn', Name: 'Kannada' },
  { key: 'ko', Name: 'Korean' },
  { key: 'ku', Name: 'Kurdish (Central)' },
  { key: 'ky', Name: 'Kyrgyz' },
  { key: 'lo', Name: 'Lao' },
  { key: 'sl', Name: 'Slovenian' },
  { key: 'sm', Name: 'Samoan' },
  { key: 'so', Name: 'Somali' },
  { key: 'sq', Name: 'Albanian' },
  { key: 'sr-Cyrl', Name: 'Serbian (Cyrillic)' },
  { key: 'sr-Latn', Name: 'Serbian (Latin)' },
  { key: 'sv', Name: 'Swedish' },
  { key: 'sw', Name: 'Swahili' },
  { key: 'ta', Name: 'Tamil' },
  { key: 'te', Name: 'Telugu' },
  { key: 'th', Name: 'Thai' },
  { key: 'ti', Name: 'Tigrinya' } ]

    


    
    const renderItem = ({item})=>(
        <TouchableOpacity onPress={()=>{
            visible(false)
            changeLang(item.Name)
            sign(item.key)
        }}>
            <Text>
                {item.Name}
            </Text>
        </TouchableOpacity>
    )
    return(
        <FlatList 
        data={List}
        keyExtractor = {item=>item.key}
        renderItem = {renderItem}/>
    )
}
export default LanguageList
