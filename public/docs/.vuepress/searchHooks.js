export default {
    async processSuggestions(suggestions, queryString, queryTerms) {
        console.log(suggestions, queryString, queryTerms)
        console.log(window.location.href)
        let url = window.location.href
        let suggestionsArr = []
        if (url.includes('/en/')) {
            suggestionsArr = suggestions.filter(item => {
                if (item.path && item.path.includes('/en/')) {
                    return item
                }
            })
        } else {
            suggestionsArr = suggestions.filter(item => {
                if (item.path && !item.path.includes('/en/')) {
                    return  item
                }
            })
        }

        if (suggestionsArr.length > 10) {
            suggestionsArr = suggestionsArr.splice(0, 10)
        }

        return suggestionsArr
    },

    async onGoToSuggestion(index, suggestion, queryString, queryTerms) {
        console.log(index, suggestion, queryTerms, queryTerms)
        // e.g. create an analytics event

        // return true if you want to prevent default navigation
        return true
    },
}
