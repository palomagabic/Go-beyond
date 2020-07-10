Rails.application.routes.draw do
  resources :blogs
  resources :scrapbooks
  devise_for :users
  get 'welcome/index'
  root 'welcome#index'
  get 'welcome/alojamientos'
  get 'welcome/vuelos'
  get 'welcome/paquetes'
  get 'welcome/tours'
  get 'welcome/album'
  get 'welcome/calculadora'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
