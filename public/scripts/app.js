/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */


 angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController)

  AlbumsIndexController.$inject = ['$http'];
  function AlbumsIndexController ( $http ) {


    var vm = this;
    vm.newAlbum = {};

    vm.newAlbum = {
      name: 'enter album name',
      artistName: 'enter artist name'
    };

    vm.newAlbum = {
      name: 'License to Ill',
      artistName: 'Beastie Boys'
    };

    vm.albums = [];

        $http({
          method: 'GET',
          url: '/api/albums'
        }).then(function successCallback(response) {
          console.log('response for all projects:', response)
          vm.albums = response.data;
        }, function errorCallback(response) {
          console.log('There was an error getting the data', response);
        });
      }
      vm.getAlbums();

      vm.createAlbum = function() {
        http({
          method: 'POST',
          url: '/api/albums',
          data: vm.newAlbum.name,
          artistName: vm.newAlbum.artistName
        }).then(function sucessCallback(response) {
          console.log(response.data);
          vm.albums.push(response.data)
          vm.newAlbum = {
            name: "",
            artistName: ""
          }

        }, function errorCallback(response) {
          console.log('There was an error getting the data')
        }
        })
      }
    }



  //   vm.albums = [
  //     {
  //       name: 'Coming Home',
  //       artistName: 'Leon Bridges'
  //     },
  //     {
  //       name: 'Are We There',
  //       artistName: 'Sharon Van Etten'
  //     },
  //     {
  //       name: 'The Queen is Dead',
  //       artistName: 'The Smiths'
  //     }
  //   ];
  // }
