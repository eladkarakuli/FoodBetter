class CreateRecipeSteps < ActiveRecord::Migration
  def change
    create_table :recipe_steps do |t|
      t.integer :step_number
      t.integer :recipe_id
      t.string :description

      t.timestamps
    end
  end
end
