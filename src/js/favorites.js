import { getApiInfo } from './api.js';
import { postApiInfo } from './api.js';
import { handleModal } from './modal.js';

const FAVORITES_KEY = 'favorites';

const listFavoritesContainer = document.querySelector('.list-favorites');
const addToFavBtn = document.querySelector('.add-to-favorites-btn');
const removeFromVav = document.querySelector('.delete-from-fav');
const startModalMenu = document.querySelector('.start-btn');
const modalContainer = document.querySelector('.backdrop');
const defaultMessage = document.querySelector('.message-block-favorites');

if (listFavoritesContainer) {
  const favoritesList = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  renderFavoritesList(favoritesList);
  listFavoritesContainer.addEventListener('click', onDeleteExerciseBtnClick);
}

if (modalContainer) {
  modalContainer.addEventListener('click', onAddToFavoritesBtnClick);
}

function onDeleteExerciseBtnClick(event) {
  const deleteBTN = event.target.closest('.delete-from-fav');
  if (deleteBTN) {
    const exerciseID = deleteBTN.dataset.id;
    const favoritesEx = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    const exercisesWithoutDeletedID = favoritesEx.filter(
      ({ _id }) => _id !== exerciseID
    );
    console.log(exercisesWithoutDeletedID);
    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(exercisesWithoutDeletedID)
    );
    renderFavoritesList(exercisesWithoutDeletedID);
  }

  // const openModalBtn = event.target.classList.contains('start-btn');
  // if (openModalBtn) {
  //   const exerciseID = deleteBTN.dataset.id;
  // }
}

export function onAddToFavoritesBtnClick(event) {
  const closestListItem = event.target.classList.contains(
    'add-to-favorites-btn'
  );
  if (!closestListItem) {
    return;
  }
  const favoritesExercise =
    JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

  const exercise = JSON.parse(localStorage.getItem('exercise'));

  if (event.target.textContent.trim() === 'Add to favorites') {
    favoritesExercise.push(exercise);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesExercise));
    event.target.innerHTML = `Remove from <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`;
  } else {
    const fe = favoritesExercise.filter(({ _id }) => _id !== exercise._id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(fe));
    event.target.innerHTML = `Add to favorites <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`;
  }
}

export function checkAddedExercises(id) {
  const favoritesExercises =
    JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  const isAdded = favoritesExercises.find(exercise => id === exercise._id);
  if (isAdded) {
    return `Remove from <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`;
  } else {
    return `Add to favorites <svg class="heart-icon" viewBox="0 0 32 32" width="13" height="13">
            <use href="../img/sprite.svg#icon-like" />
          </svg>`;
  }
}
function renderFavoritesList(favoritesList) {
  console.log(favoritesList);
  if (favoritesList.length === 0) {
    defaultMessage.classList.remove('hidden');
    listFavoritesContainer.innerHTML = '';
    return;
  }
  defaultMessage.classList.add('hidden');
  const cardMarkup = favoritesList
    .map(
      cardInfo => `
        <li class="item-favorites" >
             <div class="workout-block">
               <p class="workout-title">Workout</p>
               <button class="delete-from-fav" type="button" data-id="${cardInfo._id}">
                 <svg class="delete-icon" width="16" height="16">
                   <use href="../img/sprite.svg#icon-delete"></use>
                 </svg>
               </button>
             </div>
             <button class="start-btn" type="button">
               Start
               <svg class="arrow-icon" width="14" height="14">
                 <use href="../img/sprite.svg#icon-arrow"></use>
               </svg>
             </button>
             <div class="ex-title-block">
               <div class="icon-man-wraper">
                 <svg class="man-icon" width="16" height="16">
                   <use href="../img/sprite.svg#icon-running-man"></use>
                 </svg>
               </div>
               <h3 class="ex-title">${cardInfo.name}</h3>
             </div>
             <ul class="list-ex-category">
               <li>
                 <p class="category-text-accent">Burned calories:<span class="category-text"> ${cardInfo.burnedCalories}/ 3 min</span
                   >
                 </p>
               </li>
               <li>
                 <p class="category-text-accent">Body part:<span class="category-text"> ${cardInfo.bodyPart}</span>
                 </p>
               </li>
               <li>
                 <p class="category-text-accent">
                   Target:<span class="category-text"> ${cardInfo.target}</span>
                 </p>
               </li>
             </ul>
           </li>
    `
    )
    .join('');

  listFavoritesContainer.innerHTML = cardMarkup;
}

// EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
// First variant
// EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

// const refs = {
//   favoritesCard: document.getElementById('favorites-container'),
//   removeCards: document.querySelector('.container-remove-favorites'),
//   deleteButtons: document.querySelectorAll('.button-remove'),
//   galleryWindow: document.querySelector('.js-gallery'),
// };
// function savedCardsStorage() {
//   try {
//     const savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
//     displayFavoriteCards(savedCards);
//   } catch (err) {
//     console.log(err);
//   }
// }
// function displayFavoriteCards(savedCards) {
//   if (!savedCards || savedCards.length === 0) {
//     showRemoveCards();
//   } else {
//     createCardFavorites(savedCards);
//     hideRemoveCards();
//   }
// }
// refs.galleryWindow.addEventListener('click', deleteFavorites);
// function deleteFavorites(e) {
//   if (e.target.classList.contains('js-remove-favorites')) {
//     const cardId = e.target.closest('.list-favorites-item').dataset.id;
//     removeFavoriteCard(cardId);
//     e.target.closest('.list-favorites-item').remove();
//     const savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
//     if (savedCards.length === 0) {
//       showRemoveCards();
//     }
//   }
// }
// function removeFavoriteCard(id) {
//   let savedCards = JSON.parse(localStorage.getItem('addKeyID')) || [];
//   savedCards = savedCards.filter(card => card !== id);
//   localStorage.setItem('addKeyID', JSON.stringify(savedCards));
// }
// function showRemoveCards() {
//   refs.removeCards.classList.remove('is-hidden');
// }
// function hideRemoveCards() {
//   refs.removeCards.classList.add('is-hidden');
// }

// if (window.location.pathname.endsWith('/favorites.html')) {
//   savedCardsStorage();
// }
// function createCardFavorites(arr) {
//   Promise.all(
//     arr.map(value => getAccess({ typeFilter: 'exercises', id: value }))
//   )
//     .then(results => {
//       const dataList = results.map(result => result.data);
//       const markup = createMarkup(dataList);
//       const favoritesCard = document.getElementById('favorites-container');

//       if (favoritesCard) {
//         favoritesCard.insertAdjacentHTML('beforeend', markup);
//       }
//     })
//     .catch(err => console.error(err));
// }
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ name, target, bodyPart, burnedCalories, _id }) =>
//         `
//         <li class="item-favorites" data-id="${_id}">
//              <div class="workout-block">
//                <p class="workout-title">Workout</p>
//                <button class="delete-from-fav button-remove" type="button">
//                  <svg class="delete-icon" width="16" height="16">
//                    <use href="../img/sprite.svg#icon-delete"></use>
//                  </svg>
//                </button>
//              </div>
//              <button class="start-btn" type="button">
//                Start
//                <svg class="arrow-icon" width="14" height="14">
//                  <use href="../img/sprite.svg#icon-arrow"></use>
//                </svg>
//              </button>
//              <div class="ex-title-block">
//                <div class="icon-man-wraper">
//                  <svg class="man-icon" width="16" height="16">
//                    <use href="../img/sprite.svg#icon-running-man"></use>
//                  </svg>
//                </div>
//                <h3 class="ex-title">${name}</h3>
//              </div>
//              <ul class="list-ex-category">
//                <li>
//                  <p class="category-text">
//                    <span class="category-text-accent">Burned calories: ${burnedCalories} </span
//                    >200/ 3 min
//                  </p>
//                </li>
//                <li>
//                  <p class="category-text">
//                    <span class="category-text-accent">Body part: ${bodyPart}: </span>Waist
//                  </p>
//                </li>
//                <li>
//                  <p class="category-text">
//                    <span class="category-text-accent">Target: ${target}: </span>Abs
//                  </p>
//                </li>
//              </ul>
//            </li>
//     `
//     )
//     .join('');
// }
