import React from 'react'

const Dashboard = () => {
  return (
    <div class="dashboard">
      <div class="gutter--left gutter--right dashboard__wrap">
        <div class="dashboard__group">
          <h2 class="dashboard__label">Collections</h2>
          <ul class="dashboard__card-list">
            <li>
              <div class="card card-users card--has-onclick" id="card-users">
                <h3 class="card__title">CRM Dashboard</h3>
                <div class="card__actions"><a aria-label="Create new User"
                    class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                    type="button" href="/admin/collections/users/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115"></line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594"></line>
                        </svg></span></span></a></div><button type="button" aria-label="Show all Users"
                  class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                    class="btn__content"></span></button>
              </div>
            </li>
            <li>
              <div class="card card-documents card--has-onclick" id="card-documents">
                <h3 class="card__title">Account Dashboard</h3>
                <div class="card__actions"><a aria-label="Create new Document"
                    class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                    type="button" href="/admin/collections/documents/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115"></line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594"></line>
                        </svg></span></span></a></div><button type="button" aria-label="Show all Documents"
                  class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                    class="btn__content"></span></button>
              </div>
            </li>
            <li>
              <div class="card card-media card--has-onclick" id="card-media">
                <h3 class="card__title">Agent Dashboard</h3>
                <div class="card__actions"><a aria-label="Create new Media"
                    class="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                    type="button" href="/admin/collections/media/create"><span class="btn__content"><span
                        class="btn__icon"><svg class="icon icon--plus" viewBox="0 0 25 25"
                          xmlns="http://www.w3.org/2000/svg">
                          <line class="stroke" x1="12.4589" x2="12.4589" y1="16.9175" y2="8.50115"></line>
                          <line class="stroke" x1="8.05164" x2="16.468" y1="12.594" y2="12.594"></line>
                        </svg></span></span></a></div><button type="button" aria-label="Show all Media"
                  class="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"><span
                    class="btn__content"></span></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard