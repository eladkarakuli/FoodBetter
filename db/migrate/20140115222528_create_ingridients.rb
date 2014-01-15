class CreateIngridients < ActiveRecord::Migration
  def change
    create_table :ingridients do |t|
      t.integer :recipe_id
      t.string :description

      t.timestamps
    end
  end
end
