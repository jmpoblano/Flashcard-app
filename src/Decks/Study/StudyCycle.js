import React from 'react'
import FlipCards from "./FlipCards"
import {Link} from 'react-router-dom'

function StudyCycle({deck, cards}) {

    if (cards.length <= 2) {
        return (
            <div>
                <h5>Not Enough Cards</h5>
                <p>You need at least 3 cards to study. There are only {cards.length} cards in this deck.</p>
                <button className ="btn btn-primary">
                    <Link className="text-white" to={`/decks/${deck.id}/cards/new`} >
                        <span className="oi oi-plus"/>
                        Add Cards
                    </Link>
                </button>
            </div>
        )
    }

    return(
        <FlipCards cards={cards} />
    )

}

export default StudyCycle
