FoodBetterApp.directive('editableInput', ['EditableInput', function(EditableInput) {
	var editTemplate = '<textarea ng-show="isEditMode" ng-dblclick="switchToPreviewMode()">blabla</textarea>' +
						'<span ng-click="saveData()" ng-show="isEditMode" ng-model="fieldValue" class="glyphicon glyphicon-ok clickable"></span>';
	var previewTemplate = '<div ng-hide="isEditMode" ng-dblclick="switchToEditMode()">{{????}}</div>';
	return {
		restrict: 'E',
		replace: true,
		scope: {
			resourceId: '@',
			resourceNameSingle: '@',
			resourceNamePlural: '@',
			fieldName: '@'
		},
		compile: function(element, attributes, transclude) {
			element.html(editTemplate);
			element.append(previewTemplate);

			return function(scope, element, attributes) {
				scope.isEditMode = false;

				scope.switchToEditMode = function() {
					scope.isEditMode = true;
				};

				scope.switchToPreviewMode = function() {
					scope.isEditMode = false;
				};

				scope.saveData = function() {
					EditableInput.saveFieldValue(scope.resourceNamePlural, scope.resourceId,
											scope.fieldName, scope.fieldValue);
				};
			};
		}
	};
}]);