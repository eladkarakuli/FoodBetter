FoodBetterApp.directive('editableInput', ['EditableInput', function(EditableInput) {
	return {
		restrict: 'E',
		replace: true,
        templateUrl: 'partials/editable-text/editable-text.html',
		scope: {
			resourceId: '@',
			resourceNameSingle: '@',
			resourceNamePlural: '@',
			fieldName: '@',
            fieldValue: '@',
            lastFieldValue: '@fieldValue'
		},
		compile: function(element, attributes, transclude) {
			return function(scope, element, attributes) {
                scope.isEditMode = false;
				scope.switchToEditMode = function() {
					scope.isEditMode = true;
                    var fieldValueTextArea = $(element).find('textarea');
                    var textBoxValue = scope.lastFieldValue;
                    fieldValueTextArea.val('');
                    fieldValueTextArea.blur().focus();
                    fieldValueTextArea.val(textBoxValue);
				};

				scope.switchToPreviewMode = function() {
					scope.isEditMode = false;
				};

				scope.saveData = function() {
					EditableInput.saveFieldValue(scope.resourceNamePlural, scope.resourceId,
						scope.fieldName, scope.fieldValue).then(function() {
                            scope.lastFieldValue = scope.fieldValue;
                            scope.switchToPreviewMode();
                        });
				};

                scope.cancelEdit = function() {
                    scope.fieldValue = scope.lastFieldValue;
                    scope.switchToPreviewMode();
                };

                scope.getPreviewText = function() {
                    return (scope.fieldValue === '' ? 'click to edit' : scope.fieldValue);
                };
			};
		}
	};
}]);