import React from "react";
import './Defination.css'

const Definitions = ({ meanings, word, LightTheme, category }) => {
    return (
        <div className="meaning">
            {meanings[0] && word && category === "en" && (
                <audio
                    style={{ backgroundColor: "#fff", borderRadius: 10 }}
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}

            {
                word === "" ? (
                    <span className="subTitle">Start by typing a word in search</span>
                ) : (
                    meanings.map((mean) =>
                        mean.meanings.map((item) =>
                            item.definitions.map((def) => (
                                <div
                                    className="singleMean"
                                    style={{
                                        backgroundColor: LightTheme ? "#3b5360" : "white",
                                        color: LightTheme ? "white" : "black",
                                    }}
                                >
                                    <b>{def.definition}</b>
                                    {def.example !== undefined && (
                                        <span>
                                            <hr style={{ backgroundColor: "black", width: "100%" }} />
                                            <b>Example :</b> {def.example}
                                        </span>
                                    )}
                                    {def.synonyms.length > 0 && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms ? def.synonyms.map((s) => `${s}, `) : " None"}
                                        </span>
                                    )}
                                </div>
                            ))
                        )
                    )
                )
            }
        </div >
    );
};

export default Definitions;