const colorNames = {
    scienceBlue: "#0366D6",
    scienceBlueBrighter: "#0349D6",
    crimson: "#D51526",
    crimsonDarker: "#C61525",
    silver: "#cccccc",
    alto: "#dddddd",
    mercury: "#E5E5E5",
    black: "#000000",
    white: "#ffffff",
}

export const theme = {
    breakpoints: {
        mobileMax: 767
    },
    background: {
        primary: colorNames.white,
        secondary: colorNames.mercury
    },
    text: {
        primary: colorNames.black,
        secondary: colorNames.scienceBlue,
        secondaryHover: colorNames.scienceBlueBrighter
    },
    button: {
        background: colorNames.scienceBlue,
        backgroundHover: colorNames.scienceBlueBrighter,
        text: colorNames.white,
        backgroundDelete: colorNames.crimson,
        backgroundDeleteHover: colorNames.crimsonDarker
    },
    input: {
        border: colorNames.silver
    },
    list: {
        border: colorNames.alto
    }
}
